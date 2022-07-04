class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  belongs_to :role
  has_many :books,dependent: :destroy
  validates :email,presence: true,format: {with: /\A[^@\s]+@[^@\s]+\z/,message: 'pls enter a valid email address'}
  before_save  :assign_role

  def assign_role
    self.role_id = 2 if role_id.nil?
  end
  def super_admin?
    self.role_id == 1
  end
end
