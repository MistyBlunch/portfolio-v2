export const redirectedPathName = (pathName:string , locale: string) => {
  if (!pathName) return '/'
  const segments = pathName.split('/')
  segments[1] = locale
  return segments.join('/')
}