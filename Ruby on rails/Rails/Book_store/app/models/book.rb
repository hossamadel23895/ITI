class Book < ApplicationRecord
  has_one_attached :image
  validates :name, presence: true, length: { minimum: 5 }
  validates :description, presence: true
  validates :price, presence: true
  belongs_to :user
  after_commit :add_default_image, on: [:create, :update]

  def add_default_image
    unless image.attached?
      pics = %w[1.jpg 2.jpg 3.jpg 4.jpg 5.jpg]
      self.image.attach(io: File.open(Rails.root.join("app", "assets", "images", pics.sample)), filename: pics.sample, content_type: "image/jpg")
    end
  end

end
