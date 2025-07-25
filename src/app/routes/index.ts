import { Router } from "express"
import { AuthRoutes } from "../modules/auth/auth.route"
import { BookingRoutes } from "../modules/booking/booking.route"
import { DivisionRoutes } from "../modules/division/division.route"
import { OtpRoutes } from "../modules/otp/otp.route"
import { PaymentRoutes } from "../modules/payment/payment.route"
import { StatsRoutes } from "../modules/stats/stats.route"
import { TourRoutes } from "../modules/tour/tour.route"
import { UserRoutes } from "../modules/user/user.route"

export const router = Router()

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/division",
        route: DivisionRoutes
    },
    {
        path: "/tour",
        route: TourRoutes
    },
    {
        path: "/booking",
        route: BookingRoutes
    },
    {
        path: "/payment",
        route: PaymentRoutes
    },
    {
        path: "/otp",
        route: OtpRoutes
    },
    {
        path: "/stats",
        route: StatsRoutes
    },
    // {
    //     path: "/tour",
    //     route: TourRoutes
    // },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

// router.use("/user", UserRoutes)
// router.use("/tour", TourRoutes)
// router.use("/division", DivisionRoutes)
// router.use("/booking", BookingRoutes)
// router.use("/user", UserRoutes)