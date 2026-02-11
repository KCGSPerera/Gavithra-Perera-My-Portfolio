import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''}`
  } else {
    const years = Math.floor(diffInMonths / 12)
    const months = diffInMonths % 12
    
    if (months === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`
    }
  }
}