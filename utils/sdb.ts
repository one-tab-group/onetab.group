import { createClient, PostgrestError } from '@supabase/supabase-js'
import { SessionData, AccountData } from '~/types'

type SupaDb = {
  session: {
    select: () => Promise<SessionData[] | null>
    insert: (sessionList: SessionData[]) => Promise<SessionData[] | null>
    upsert: (sessionList: SessionData[]) => Promise<SessionData[] | null>
    updateById: (
      sessionId: SessionData['id'],
      sessionItem: SessionData
    ) => Promise<SessionData[] | null>
    deleteById: (
      sessionId: SessionData['id'],
      sessionItem: SessionData
    ) => Promise<SessionData[] | null>
    queryByAccountId: (
      accountId: AccountData['id']
    ) => Promise<SessionData[] | null>
  }
  account: {
    select: () => Promise<AccountData[] | null>
    queryById: (accountId: AccountData['id']) => Promise<AccountData[] | null>
    queryByEmail: (email: AccountData['email']) => Promise<AccountData[] | null>
    insert: (account: AccountData) => Promise<AccountData[] | null>
    upsert: (account: AccountData) => Promise<AccountData[] | null>
    updateSyncedAt: (
      accountId: AccountData['id'],
      syncedTime: number
    ) => Promise<AccountData[] | null>
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
  .from<SessionData>('session')
  .select()
  .order('created_at', { ascending: false })

const selectSession = async () => {
  const { data, error } = await sessionQuery

  return tryCatchDbError<typeof data>(data, error)
}

const selectSessionByAccountId = async (accountId: string) => {
  const { data, error } = await sessionQuery.eq('account_id', accountId)

  return tryCatchDbError<typeof data>(data, error)
}

const insertSession = async (session: SessionData[]) => {
  const { data, error } = await supabase
    .from<SessionData>('session')
    .insert(session)

  return tryCatchDbError<typeof data>(data, error)
}

const upsertSession = async (session: SessionData[]) => {
  const { data, error } = await supabase
    .from<SessionData>('session')
    .upsert(session)

  if (error) {
    console.log(error)
  }
  return data
}

const updateSessionById = async (
  sessionId: string,
  sessionItem: SessionData
) => {
  const { data, error } = await supabase
    .from<SessionData>('session')
    .update(sessionItem)
    .eq('id', sessionId)
    .eq('account_id', sessionItem.account_id)
  return tryCatchDbError<typeof data>(data, error)
}

const deleteSessionById = async (
  sessionId: string,
  sessionItem: SessionData
) => {
  const { data, error } = await supabase
    .from<SessionData>('session')
    .delete()
    .match({ id: sessionId, account_id: sessionItem.account_id })
  return tryCatchDbError<typeof data>(data, error)
}

const accountQuery = supabase.from<AccountData>('account').select()

const selectAccount = async () => {
  const { data, error } = await accountQuery

  return tryCatchDbError<typeof data>(data, error)
}

const selectAccountById = async (accountId: AccountData['id']) => {
  const { data, error } = await accountQuery.eq('id', accountId)

  return tryCatchDbError<typeof data>(data, error)
}

const selectAccountByEmail = async (email: AccountData['email']) => {
  const { data, error } = await accountQuery.eq('email', email)

  return tryCatchDbError<typeof data>(data, error)
}

const insertAccount = async (account: AccountData) => {
  const { data, error } = await supabase
    .from<AccountData>('account')
    .insert([account])

  return tryCatchDbError<typeof data>(data, error)
}

const upsertAccount = async (account: AccountData) => {
  const { data, error } = await supabase
    .from<AccountData>('account')
    .upsert([account])

  return tryCatchDbError<typeof data>(data, error)
}

const updateAccountSyncedAt = async (accountId: string, syncedTime: number) => {
  const { data, error } = await supabase
    .from<AccountData>('account')
    .update({ synced_at: syncedTime })
    .eq('id', accountId)
    .select()

  return tryCatchDbError<typeof data>(data, error)
}

sdb.session = {
  select: selectSession,
  insert: insertSession,
  upsert: upsertSession,
  updateById: updateSessionById,
  deleteById: deleteSessionById,
  queryByAccountId: selectSessionByAccountId
}

sdb.account = {
  select: selectAccount,
  insert: insertAccount,
  upsert: upsertAccount,
  queryById: selectAccountById,
  queryByEmail: selectAccountByEmail,
  updateSyncedAt: updateAccountSyncedAt
}

export { supabase, sdb }
