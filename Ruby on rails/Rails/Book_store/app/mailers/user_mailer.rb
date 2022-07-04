class UserMailer < ApplicationMailer
  default from: "from@example.com"

  def post_created
    creator = params[:id]
    @user = User.find(1)
    mail(to: @user.email, subject: 'book post created')
  end
end
