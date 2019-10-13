import * as React from "react"
import { Override, Data } from "framer"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
    emailError: "BLANK_INPUT",
    passwordError: "BLANK_INPUT"
})

export function EmailInput(): Override {
    return {
        onValueChange: (value: string) => {
            // console.log(!value.includes("@"))

            // if (value.length === 0) {
            //     appState.emailError = true
            // } else {
            //     appState.emailError = false
            // }
            // appState.emailError = (value.length === 0 || !value.includes("@") || !value.includes(".com"))

            if (value.length === 0) {
                appState.emailError = "BLANK_INPUT"
            } else if (!value.includes("@") || !value.includes(".com")) {
                appState.emailError = "WRONG_FORMAT"
            } else {
                appState.emailError = ""
            }
            // appState.emailError = value.length === 0 ? "BLANK_INPUT" : !value.includes("@") || !value.includes(".com") ? "WRONG_FORMAT" : ""

            
        },
    }
}

export function EmailError(): Override {
    const errorMessages = {
        BLANK_INPUT: "Enter your email address",
        WRONG_FORMAT: "Enter a valid email address"
    }
    return {
        visible: appState.emailError !== "",
        text: errorMessages[appState.emailError]
    }
}

export function PasswordInput(): Override {
    return {
        onValueChange: (value: string) => {
            // appState.passwordError = value.length < 5
            if (value.length === 0) {
                appState.passwordError = "BLANK_INPUT"
            } else if (value.length < 5) {
                appState.passwordError = "WRONG_FORMAT"
            } else {
                appState.passwordError = ""
            }
        },
    }
}

export function PasswordError(): Override {
    const errorMessages = {
        BLANK_INPUT: "Enter your password",
        WRONG_FORMAT: "Your password is too short"
    }
    return {
        visible: appState.passwordError !== "",
        text: errorMessages[appState.passwordError]
    }
}

export function ContinueButton(): Override {
    return {
        disabled: appState.emailError || appState.passwordError
    }
}
