import type { Company, CompanyTree, Department, Employee } from 'types'

export type BuildCompanyTreeParams = {
  employeesFromApi: Employee[]
  departmentsFromApi: Department[]
  companiesFromApi: Company[]
}

export const buildCompanyTree = ({
  employeesFromApi,
  departmentsFromApi,
  companiesFromApi,
}: BuildCompanyTreeParams): CompanyTree => {
  // code here and change the return afterwards
  return [] as CompanyTree
}
