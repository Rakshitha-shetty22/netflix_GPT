export const validation = (password, email, name) => {
    if (!name) return "Please enter the name"

    const isEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email)
    if (!isEmail) return "Please enter the valid email"

    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if (!isPassword) return "Please enter the valid password"

    return null;
}
