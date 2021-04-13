export type Identity = 'Login' | 'SignUp' | 'EmailVerification' | 'ForgotPassword' | 'CreatePassword';

export const Identity = {
    Login: "login" as Identity,
    SignUp: "signup" as Identity,
    EmailVerification: 'emailverification' as Identity,
    ForgotPassword: 'forgotpassword' as Identity,
    CreatePassword: 'createpassword' as Identity
};
