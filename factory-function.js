const createContact = (name, title, email) => ({
    name, title, email
})

const whereToDisplayContactsInDOM = document.querySelector("#contactList")

const displayContact = contact => {
    const contactHTMLRepresentation = `
  <section class ="contact">
    <h1>${contact.name}</h1>
    <h2>${contact.title}</h2>
    <div>${contact.email}</div>
  </section>
`

whereToDisplayContactsInDOM.innerHTML += contactHTMLRepresentation
}

const mark = createContact(
    "Mark Brownlee",
    "Head Leaf Guy",
    "mark@mark.com"
)

const dad = createContact(
    "Keith Wheeler",
    "DAD",
    "dad@dad.com"
)

const matt = createContact(
    "Matt Fagan",
    "Friend",
    "matt@matt.com"
)

const humberto = createContact(
    "Humberto Alvarado",
    "Friend",
    "humberto@humberto.com"
    )

const nancie = createContact(
    "Nancie Kang",
    "Crush",
    "nancie@nancie.com"
)

displayContact(mark)
displayContact(dad)
displayContact(matt)
displayContact(humberto)
displayContact(nancie)