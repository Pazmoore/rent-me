import { BehaviorSubject } from 'rxjs'

// Create a BehaviorSubject
const authSubject = new BehaviorSubject(true)
const showAuthSubject = new BehaviorSubject('none')
export const showAuth = (toggle: string) => showAuthSubject.next(toggle)
export const authenticate = (authenticated: boolean) => authSubject.next(authenticated)

// Export the BehaviorSubject as an observable
export const authObservable = authSubject.asObservable()
export const showAuthObservable = showAuthSubject.asObservable()