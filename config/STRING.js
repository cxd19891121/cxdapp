/**
 * Created by xiaodong chen on 12/21/2016.
 */
var STATIC_STRING =
    {
        ERROR_USERNAME_NO_MATCH: "error: username does not match",
        ERROR_PASSWORD_NO_MATCH: "error: password does not match",
        ERROR_USERNAME_PASSWORD_NO_MATCH: "error: username or password does not match",
        ERROR_NO_ITEM: "error: no item find",
        ERROR_DUPLICATE_USERNAME: "error: username has already been used",
        ERROR_DUPLICATE_EMAIL: "error: e-mail has already been used",

        SUCCESS_UNIQUE_USERNAME: "success: username is available",
        SUCCESS_UNIQUE_EMAIL: "success: email is available",
        SUCCESS_FIND_ITEM: "success: Item found",
        SUCCESS_ADD_ITEM: "success: Item has been added",
        SUCCESS_UPDATED_ITEM: "success: Item has been updated",
        SUCCESS_DELETE_ITEM: "success: Item has been deleted",
        SUCCESS_SIGN_IN: "success: sign in",
        SUCCESS_SIGN_UP: "success: sign up",

        ERROR_SIGN_IN: "error: fail to sign in",
        ERROR_SIGN_UP: "error:fail to sign up",
        ERROR_FIND_ITEM: "error: no item find",
        ERROR_ADD_ITEM: "error: fail to add item",
        ERROR_UPDATED_ITEM: "error: fail to update item",
        ERROR_DELETE_ITEM: "error: fail to delete item",

        ERROR_USER_GET_ALL: "error: user get all service",
        SUCCESS_USER_GET_ALL: "success: user get all service",
        ERROR_USER_GET_BY_NAME: "error: user get by name",
        SUCCESS_USER_GET_BY_NAME: "success: user get by name",
        ERROR_USER_GET_BY_EMAIL: "error: user get by email",
        SUCCESS_USER_GET_BY_EMAIL: "success: user get by email",
        ERROR_USER_GET_BY_ID: "error: user get by user_id",
        SUCCESS_USER_GET_BY_ID: "success: user get by user_id",
        ERROR_USER_DELETE_BY_ID: "error: user delete by user_id",
        SUCCESS_USER_DELETE_BY_ID: "success: user delete by user_id",
        ERROR_USER_ADD: "error: fail to add new user",

        ERROR_SYSTEM_DATABASE: "error: cannot connect to database"
    }

module.exports = STATIC_STRING;