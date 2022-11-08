require 'faker'

25.times do
  author = Author.create!({
    name: Faker::Name.name,
    age: rand(18..70),
    location: Faker::Address.country,
    created_at: Faker::Date.between_except(from: 10.year.ago, to: 1.year.from_now, excepted: Date.today),
    updated_at: Faker::Date.in_date_period
  })

  numRand = rand(1..3)
  
  numRand.times do
    Book.create!({
      name: Faker::Book.title,
      genre: Faker::Book.genre,
      pages: rand(50..700),
      created_at: Faker::Date.between_except(from: 10.year.ago, to: 1.year.from_now, excepted: Date.today),
      updated_at: Faker::Date.in_date_period,
      author_id: author.id
    })
  end
  
end

puts '=========================Created 50 Authors with random amount of books==========================='