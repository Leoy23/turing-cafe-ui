describe('Page Load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: '/sampleResys.json', 
    });
    cy.visit('http://localhost:3000/')
  })

  it('should display a header', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservations')
  })

  it('should display a form to make a reservation', () => {
    cy.get('form').should('exist')
    .get('[placeholder="Name"]').should('be.visible')
    .get('[placeholder="Date"]').should('be.visible')
    .get('[placeholder="Time"]').should('be.visible')
    .get('[placeholder="# of guests"]').should('be.visible')
    .get('button').should('have.class', 'make-reservation')
  })

  it('should display all reservations', () => {
    cy.get('.reservations-container').should('contain', 'Christie')
    .get('.reservations-container').should('contain', 'Leta')
    .get('.reservations-container').should('contain', 'Pam')
  })

  it('should be able to make a new reservation', () => {
    cy.get('[placeholder="Name"]').type('Lee')
    .get('[placeholder="Date"]').type('12/02/2022')
    .get('[placeholder="Time"]').type('2:30')
    .get('[placeholder="# of guests"]').type(3)
    .get('.make-reservation').click()
  })
})