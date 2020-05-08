export default function sendMail(name, phone, email, message) {

    return fetch("././mail/contact_me.php", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            message: message
        }) // data can be `string` or {object}!
    })
}