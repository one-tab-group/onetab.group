export type AnyRecord = Record<string, any>

export type Tab = AnyRecord

export type Tabs = Array<AnyRecord>

export type UserType = 'GitHub' | 'Google'

export interface SessionData {
  id: string
  title: string
  tabTree: Tabs
  collapsed: boolean
  created_at: number
  updated_at: number
  account_id?: string
}

export type AccountData = {
  id: string
  name: string
  email: string
  type: UserType
  avatar_url: string
  accounts_url: string
  created_at: number
  updated_at?: number
  synced_at?: number
}
