import { gql } from "@apollo/client"

export const USER_SIGN_UP_MUTATION = gql`
    mutation createUser($info:UserSignUpInputs!) {
        signUpUser(data:$info){
            status
            message
        }
    }
`;

export const USER_LOGIN_MUTATION = gql`
    mutation loginUser($info:UserLoginInputs!) {
        loginUser(data:$info){
            status
            message
            token
            user {
                _id
                name
                email
                password
                phone
                image
                role
                gender
                currentAddress
                permanentAddress
                dateOfBirth
                accountStatus
                darkMode
            }
        }
    }
`;

export const UPDATE_OWNER_INFO_MUTATION = gql`
    mutation updateOwnerInfo($email: String!, $info: UpdateOwnerInput!) {
        updateOwnerInfo(email: $email, data: $info) {
            status
            message
            owner {
                _id
                name
                email
                password
                phone
                image
                role
                gender
                currentAddress
                permanentAddress
                dateOfBirth
                accountStatus
                darkMode
            }
        }
    }
`;

