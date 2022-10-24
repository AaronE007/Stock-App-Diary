u1 = User.create(username: 'Aaron', email: 'aaron@aaronmail.com', password: 'Aaron', bio: 'Stock guy')
u2 = User.create(username: 'Justin', email: 'justin@justinmail.com', password: 'Justin', bio: 'Stock guy')
u3 = User.create(username: 'Nancy', email: 'nancy@nancymail.com', password: 'Nancy', bio: 'Stock lady')


c1 = Company.create(name: "CompTeck", description: "Just a computer company.")
c2 = Company.create(name: "SillyTeck", description: "Just a silly company.")

s1 = Stock.create(user_id: u1.id, company_id: c1.id, name: 'Comp Stock', price_purchased_at: '100', number: '100')
s2 = Stock.create(user_id: u2.id, company_id: c2.id, name: 'Silly Stock', price_purchased_at: '200', number: '200')