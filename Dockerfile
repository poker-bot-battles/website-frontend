FROM ruby:3.3.0

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile ./
COPY Gemfile.lock ./

RUN gem install bundler && bundle install

COPY . ./

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host=0.0.0.0"]

