export interface LoginPayload {
  email: string,
  password: string,
  rememberMe?: boolean,
}

export interface LoginResponce {
  token: string
  role: number
  name: string
  permission: any[]
  user_type: any
  tms_type: string
  logo: string
  company_name: string
  branchSettings: BranchSettings
  branch_user: number
  linked_id: any
}

export interface BranchSettings {
  branch_manager: boolean
}