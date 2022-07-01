class User
  @@default = "user"

  def initialize(n = "default name")
    @name = n
  end

  def get_name
    @name
  end

  def set_name=(n)
    @name = n
  end

  def get_default
    @@default
  end

  def change_default=(v)
    @@default = v
  end
end

user = User.new "Hossam"
puts "Name variable in the created instance is : #{user.get_name}"

user.set_name = "Yousef"
puts "Name variable after updating it is : #{user.get_name}"

user.change_default = "user_name"
puts "Name variable default value is : #{user.get_default}"
