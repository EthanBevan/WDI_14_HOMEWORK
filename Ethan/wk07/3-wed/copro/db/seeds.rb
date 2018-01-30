Project.delete_all
User.delete_all

arr1 = ['Goku', 'Sonic', 'Yoshi']
arr2 = ['Basketball', 'Hockey', 'Boxing']

user = User.new
user.email = 'ethanbevan00@yahoo.com'
user.password = "pudding"
user.save

10.times do
Project.create(title: "#{arr1.sample} #{arr2.sample}", user_id: user.id)
end