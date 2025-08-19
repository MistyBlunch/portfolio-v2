import { IExperience } from '../../interfaces/locales/experience.interface'

export const processDate = (experience: IExperience, locale: string = 'en') => {
  const currentText = locale === 'es' ? 'Actualidad' : 'Currently'
  
  if (!experience.endYear) return `${experience.startYear} - ${currentText}`
  if (!experience.endMonth) return `${experience.startYear} - ${experience.endYear}`
  if (experience.startYear !== experience.endYear) {
    return `${experience.startYear} - ${experience.endYear}`
  }
  return `${experience.startMonth} - ${experience.endMonth} ${experience.endYear}`
}
