FROM ruby:3.0.0-alpine

RUN apk add --update --virtual \
  runtime-deps \
  build-base \
  libxml2-dev \
  libxslt-dev \
  nodejs \
  yarn \
  libffi-dev \
  readline \
  build-base \
  libc-dev \
  linux-headers \
  readline-dev \
  file \
  imagemagick \
  git \
  tzdata \
  && rm -rf /var/cache/apk/*

WORKDIR /app
COPY . /app/

ENV BUNDLE_PATH /gems
RUN yarn install
RUN bundle install

#EXPOSE 3000

#RUN ["chmod", "+x", "./docker-entrypoint.sh"]

#ENTRYPOINT ["./docker-entrypoint.sh"]