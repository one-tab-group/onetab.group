import { createClient, PostgrestError } from '@supabase/supabase-js'
import { Session, Account, License } from '~/types'

type SupaDb = {
  session: {
    select: () => Promise<Session[] | null>
    insert: (sessionList: Session[]) => Promise<Session[] | null>
    upsert: (sessionList: Session[]) => Promise<Session[] | null>
    updateById: (
      sessionId: Session['id'],
      sessionItem: Session
    ) => Promise<Session[] | null>
    deleteById: (
      sessionId: Session['id'],
      accountId: Account['id']
    ) => Promise<Session[] | null>
    fetchByAccountId: (accountId: Account['id']) => Promise<Session[] | null>
  }
  account: {
    select: () => Promise<Account[] | null>
    queryById: (accountId: Account['id']) => Promise<Account[] | null>
    fetchByEmail: (email: Account['email']) => Promise<Account[] | null>
    insert: (account: Account) => Promise<Account[] | null>
    upsert: (account: Account) => Promise<Account[] | null>
    updateSyncedAt: (
      accountId: Account['id'],
      syncedTime: number
    ) => Promise<Account[] | null>
  }
  license: {
    fetchByEmail: (email: Account['email']) => Promise<License[] | null>
    insert: (license: License) => Promise<License[] | null>
    upsert: (license: License) => Promise<License[] | null>
  }
}

// Create a single supabase client for interacting with your database
const { SUPABASE_KEY, SUPABASE_URL } = useRuntimeConfig()
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const sdb = {} as SupaDb

const tryCatchDbError = <T>(data: T, error: PostgrestError | null) => {
  if (error) {
    console.log(error)
  }
  return data
}

const sessionQuery = supabase
  .from<Session>('session')
  .select()
  .order('created_at', { ascending: false })

/** session api begin */
const selectSession = async () => {
  const { data, error } = await sessionQuery

  return tryCatchDbError<typeof data>(data, error)
}

const selectSessionByAccountId = async (accountId: string) => {
  const { data, error } = await sessionQuery.eq('account_id', accountId)

  return tryCatchDbError<typeof data>(data, error)
}

const insertSession = async (session: Session[]) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .insert(session)

  return tryCatchDbError<typeof data>(data, error)
}

const upsertSession = async (session: Session[]) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .upsert(session)

  if (error) {
    console.log(error)
  }
  return data
}

const updateSessionById = async (sessionId: string, sessionItem: Session) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .update(sessionItem)
    .eq('id', sessionId)
    .eq('account_id', sessionItem.account_id)
  return tryCatchDbError<typeof data>(data, error)
}

const deleteSessionById = async (sessionId: string, accountId: string) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .delete()
    .match({ id: sessionId, account_id: accountId })
  return tryCatchDbError<typeof data>(data, error)
}
/** session api end */

/** account api begin */
const accountQuery = supabase.from<Account>('account').select()

const selectAccount = async () => {
  const { data, error } = await accountQuery

  return tryCatchDbError<typeof data>(data, error)
}

const selectAccountById = async (accountId: Account['id']) => {
  const { data, error } = await accountQuery.eq('id', accountId)

  return tryCatchDbError<typeof data>(data, error)
}

const selectAccountByEmail = async (email: Account['email']) => {
  const { data, error } = await accountQuery.eq('email', email)

  return tryCatchDbError<typeof data>(data, error)
}

const insertAccount = async (account: Account) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .insert([account])

  return tryCatchDbError<typeof data>(data, error)
}

const upsertAccount = async (account: Account) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .upsert([account])

  return tryCatchDbError<typeof data>(data, error)
}

const updateAccountSyncedAt = async (accountId: string, syncedTime: number) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .update({ synced_at: syncedTime })
    .eq('id', accountId)
    .select()

  return tryCatchDbError<typeof data>(data, error)
}
/** account api end */

/** license api begin */
const licenseQuery = supabase.from<License>('license').select()

const selectLicenseByEmail = async (email: Account['email']) => {
  const { data, error } = await licenseQuery.eq('email', email)

  return tryCatchDbError<typeof data>(data, error)
}

const insertLicense = async (license: License) => {
  const { data, error } = await supabase
    .from<License>('license')
    .insert([license])

  return tryCatchDbError<typeof data>(data, error)
}

const upsertLicense = async (license: License) => {
  const { data, error } = await supabase
    .from<License>('license')
    .upsert([license])

  return tryCatchDbError<typeof data>(data, error)
}
/** license api end */

sdb.session = {
  select: selectSession,
  insert: insertSession,
  upsert: upsertSession,
  updateById: updateSessionById,
  deleteById: deleteSessionById,
  fetchByAccountId: selectSessionByAccountId
}

sdb.account = {
  select: selectAccount,
  insert: insertAccount,
  upsert: upsertAccount,
  queryById: selectAccountById,
  fetchByEmail: selectAccountByEmail,
  updateSyncedAt: updateAccountSyncedAt
}

sdb.license = {
  fetchByEmail: selectLicenseByEmail,
  insert: insertLicense,
  upsert: upsertLicense
}

export { supabase, sdb }
