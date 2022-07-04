module PersonModule
  require "date"

  class Person
    attr_accessor :firstName, :lastName, :birthDate
    @firstName
    @lastName
    @birthDate

    def initialize
      @firstName = ""
      @lastName = ""
      @birthDate = ""
    end

    def get_person_data
      puts "Enter Your First Name : "
      @firstName = gets.chomp

      puts "Enter Your Last Name : "
      @lastName = gets.chomp

      begin
        puts "Enter Your Birth Date (YYYY/MM/DD): "
        @birthDate = (Date.today - Date.parse(gets.chomp)).to_i
      rescue
        puts "Please enter a valid data format!"
        exit
      end
    end

    def print_age_formats
      puts "Hello #{firstName} #{lastName}"
      puts " Here is your age in 3 different formats"
      puts " Your age in years : #{@birthDate / 365}"
      puts " Your age in months : #{@birthDate / 12}"
      puts " your age in days : #{@birthDate}"
    end
  end
end

person = PersonModule::Person.new
person.get_person_data
person.print_age_formats
