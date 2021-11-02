import asyncErrorHandler from 'express-async-handler'

import registerNewUserAccount from './account_services/addNewUser.Services.js'
import getAllRegisteredUser from './account_services/getAllUser.Services.js'
import editRegisteredUserAccount from './account_services/editRegisteredUser.Services.js'
import assigToActiveOrInactive from './account_services/assignUserToActiveOrInactive.Services.js'
import userLogin from './account_services/userLogIn.Services.js'
import getRegisteredAuthUser from './account_services/getAuthUser.js'
import forceChangePassword from './account_services/forceChangePasswordForNewUser.Services.js'

import coverageUserDetails from './account_services/userViewServices/coverageUserDetails.Services.js'

/**
 * inside in
 * src\api\account\account_services
 */
const registerUser = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await registerNewUserAccount(req.body)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }
})

const getAllUserAccountDetails = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await getAllRegisteredUser(req.body)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }

})

const editRegisteredUser = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await editRegisteredUserAccount(req.body)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }

})

const assignUserToActiveOrInactive = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await assigToActiveOrInactive(req.body)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }

})

const registeredUserLogIn = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await userLogin(req.body)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }

})

const getAuthenticateUser = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await getRegisteredAuthUser(req.user)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }

})

const forceUserToChangePassword = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await forceChangePassword(req.body)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }

})

/**
 * inside in
 * src\api\account\account_services\userViewServices
 */
const userView = asyncErrorHandler(async (req, res) => {
    try {
        let returnedData = await coverageUserDetails(req.body)
        return res.json(returnedData)
    } catch (error) {
        return res.json({
            errorMessage: error.message
        })
    }
})

export {
    registerUser,
    getAllUserAccountDetails,
    editRegisteredUser,
    assignUserToActiveOrInactive,
    registeredUserLogIn,
    getAuthenticateUser,
    forceUserToChangePassword,

    userView
}