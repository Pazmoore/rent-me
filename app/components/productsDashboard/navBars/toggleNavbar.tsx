import { BehaviorSubject } from "rxjs"
const sidebarSubject = new BehaviorSubject('none')
const miniSidebarSubject = new BehaviorSubject('none')
export const sidebarObservable = sidebarSubject.asObservable()
export const miniSidebarObservable = miniSidebarSubject.asObservable()
export const toggleSidebar = (menu: string) => sidebarSubject.next(menu)
export const toggleMiniSidebar = (menu: string) => miniSidebarSubject.next(menu)