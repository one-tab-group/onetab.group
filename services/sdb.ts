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
    ) => Promise<{
      data: Session[] | null
      error: PostgrestError | null
    }>
    deleteById: (
      sessionId: Session['id'],
      accountId: Account['id']
    ) => Promise<Session[] | null>
    fetchById: (id: Session['id']) => Promise<{
      data: Session[] | null
      error: PostgrestError | null
    }>
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
    fetchByKey: (key: License['license_key']) => Promise<{
      data: License[] | null
      error: PostgrestError | null
    }>
    fetchByEmail: (email: Account['email']) => Promise<{
      data: License[] | null
      error: PostgrestError | null
    }>
    insert: (license: License) => Promise<{
      data: License[] | null
      error: PostgrestError | null
    }>
    upsert: (license: License) => Promise<{
      data: License[] | null
      error: PostgrestError | null
    }>
    deleteById: (
      licenseId: License['id'],
      accountId: Account['id']
    ) => Promise<{
      data: License[] | null
      error: PostgrestError | null
    }>
  }
}

// Create a single supabase client for interacting with your database
const config = useRuntimeConfig()
const supabase = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
)

const sdb = {} as SupaDb

const tryCatchError = <T>(data: T, error: PostgrestError | null) => {
  if (error) {
    console.log(error)
  }
  return data
}
const tryCatchDBError = <T>(data: T, error: PostgrestError | null) => {
  if (error) {
    console.log(error)
  }
  return {
    data,
    error
  }
}

/** session api begin */
const selectSession = async () => {
  const { data, error } = await supabase
    .from<Session>('session')
    .select()
    .order('created_at', { ascending: false })

  return tryCatchError<typeof data>(data, error)
}

const selectSessionById = async (id: string) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .select()
    .order('created_at', { ascending: false })
    .eq('id', id)

  return tryCatchDBError<typeof data>(data, error)
}

const selectSessionByAccountId = async (accountId: string) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .select()
    .order('created_at', { ascending: false })
    .eq('account_id', accountId)

  return tryCatchError<typeof data>(data, error)
}

const insertSession = async (session: Session[]) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .insert(session)

  return tryCatchError<typeof data>(data, error)
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
  return tryCatchDBError<typeof data>(data, error)
}

const deleteSessionById = async (sessionId: string, accountId: string) => {
  const { data, error } = await supabase
    .from<Session>('session')
    .delete()
    .match({ id: sessionId, account_id: accountId })
  return tryCatchError<typeof data>(data, error)
}
/** session api end */

/** account api begin */
const selectAccount = async () => {
  const { data, error } = await supabase.from<Account>('account').select()

  return tryCatchError<typeof data>(data, error)
}

const selectAccountById = async (accountId: Account['id']) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .select()
    .eq('id', accountId)

  return tryCatchError<typeof data>(data, error)
}

const selectAccountByEmail = async (email: Account['email']) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .select()
    .eq('email', email)

  return tryCatchError<typeof data>(data, error)
}

const insertAccount = async (account: Account) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .insert([account])

  return tryCatchError<typeof data>(data, error)
}

const upsertAccount = async (account: Account) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .upsert([account])

  return tryCatchError<typeof data>(data, error)
}

const updateAccountSyncedAt = async (accountId: string, syncedTime: number) => {
  const { data, error } = await supabase
    .from<Account>('account')
    .update({ synced_at: syncedTime })
    .eq('id', accountId)
    .select()

  return tryCatchError<typeof data>(data, error)
}
/** account api end */

/** license api begin */
const selectLicenseByKey = async (key: License['license_key']) => {
  const { data, error } = await supabase
    .from<License>('license')
    .select()
    .eq('license_key', key)

  return tryCatchDBError<typeof data>(data, error)
}

const selectLicenseByEmail = async (email: Account['email']) => {
  const { data, error } = await supabase
    .from<License>('license')
    .select()
    .eq('email', email)

  return tryCatchDBError<typeof data>(data, error)
}

const insertLicense = async (license: License) => {
  const { data, error } = await supabase
    .from<License>('license')
    .insert([license])

  return tryCatchDBError<typeof data>(data, error)
}

const upsertLicense = async (license: License) => {
  const { data, error } = await supabase
    .from<License>('license')
    .upsert([license])

  return tryCatchDBError<typeof data>(data, error)
}

const deleteLicenseById = async (licenseId: string, accountId: string) => {
  const { data, error } = await supabase
    .from<License>('license')
    .delete()
    .match({ id: licenseId, account_id: accountId })
  return tryCatchDBError<typeof data>(data, error)
}
/** license api end */

sdb.session = {
  select: selectSession,
  insert: insertSession,
  upsert: upsertSession,
  updateById: updateSessionById,
  deleteById: deleteSessionById,
  fetchById: selectSessionById,
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
  fetchByKey: selectLicenseByKey,
  fetchByEmail: selectLicenseByEmail,
  insert: insertLicense,
  upsert: upsertLicense,
  deleteById: deleteLicenseById
}

export { supabase, sdb }
