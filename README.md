# README

A demo Rails 7 app for uploading files with ActiveStorage

- Ruby 3.2.2
- Rails 7.0.4.3
- Database sqlite3

### Add active storage

- bin/rails active_storage:install
- bin/rails db:migrate
- Add gem "image_processing", "~> 1.2"
- bundle
- Add to Post model has_one_attached :photo
- Add to :photo to PostsController post_params method: params.require(:post).permit(:title, :content, :photo)
- Add to Post form view: <%= form.file_field :photo %>
- Add to Post post partial view: <%= image_tag url_for(post.photo) if post.photo.attached? %>
