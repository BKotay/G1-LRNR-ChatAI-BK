// Four Passing Cypress testing based on the Home Page //

describe('Home Component Tests', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('http://localhost:5173/'); // Replace with the actual URL of your app
    });
  
    it('1. Renders the Section with the emoji "🐢" and Title that is located in the Navigation Bar.', () => {
      cy.get('span').contains('🐢').should('exist'); // Check for the turtle emoji
      cy.get('div').contains('lrnr').should('exist'); // Check for the title "lrnr"
      cy.get('h2').contains('Your guided path to programming enlightenment').should('exist');
    });


  
    it('2. Renders the "BEGIN JOURNEY" Button', () => {
      // Check if the button is rendered
      cy.get('button').contains('BEGIN JOURNEY').should('exist');
      cy.get('button')
        .contains('BEGIN JOURNEY')
        .should('have.class', 'bg-emerald-500')
        .and('have.class', 'text-white');
    });


  

    it('3. Renders the Features Section with Icons and Descriptions', () => {
      // Check if feature titles are rendered
      cy.get('h3').contains('Personalized Quizzes').should('exist');
      cy.get('h3').contains('Rewarding').should('exist');
      cy.get('h3').contains('Personal SME').should('exist');
  
      // Check if feature descriptions are rendered
      cy.get('p').contains('Greetings, young padawan').should('exist');
      cy.get('p').contains('Our app is designed to be both challenging and rewarding').should('exist');
      cy.get('p').contains('Welcome to the path of knowledge').should('exist');
    });


  

    
    it('4. Renders Icons for Each Feature', () => {
      // Check if icons are rendered
      cy.get('.zap-icon').should('exist'); // Zap icon
      cy.get('.credit-card').should('exist'); // CreditCard icon
      cy.get('.user-icon').should('exist'); // User icon
    });
  });