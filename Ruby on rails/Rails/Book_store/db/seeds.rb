
require 'faker'
Role.destroy_all
Role.create(name:'super admin',description:'super admin on all operations')
Role.create(name:'admin',description:'admin edits his own infos')

User.destroy_all

User.create(name: 'admin', email:'hossam@gmail.com',password:'123456',password_confirmation:'123456',role_id:1)

5.times do |i|
  f_name = Faker::Name.first_name
  User.create(
    name: f_name,
    email: Faker::Internet.email(name: f_name),
    password:"123456",
    password_confirmation:"123456",
    role_id:2
  )
end
Book.destroy_all
20.times do |i|
  Book.create(
    name: Faker::Name.name , 
    description: Faker::Lorem.sentence(word_count: 10, supplemental: false, random_words_to_add: 0).chop,
    price: 60.03,
    user_id:1
  )
end



