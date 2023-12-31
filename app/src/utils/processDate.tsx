import { IExperience } from "../interfaces/locales/experience.interface"

export const processDate = (experience: IExperience) => {
  if (experience.startYear !== experience.endYear)
    return `${experience.startYear + ' - ' + experience.endYear}`
  return `${experience.startMonth +
    ' - ' +
    experience.endMonth +
    ' ' +
    experience.endYear
    }`
}
