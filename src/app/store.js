import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import paymentReducer from '../features/payments/paymentSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        payment: paymentReducer,
    }
})