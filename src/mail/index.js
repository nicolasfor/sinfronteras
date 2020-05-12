export default function sendMail({ name, city, phone, email, message }) {

    return fetch("././mail/contact_me.php", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            city: city,
            message: message
        }) // data can be `string` or {object}!
    })
}