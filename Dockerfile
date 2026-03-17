
FROM ruby:3.4.7@sha256:779ca68b84fe3804e27f5b7ea5ab001005c708b7236a798c15b860d71cba9d21

# Upgrade all packages to latest versions to reduce vulnerabilities and install dependencies in one layer
RUN apt-get update \
  && apt-get -y upgrade \
  && apt-get -y dist-upgrade \
  && apt-get -y install ca-certificates curl \
  && rm -rf /var/lib/apt/lists/*

# Add Zscaler certificate (if required)
ADD https://artifactory-prd.prd.betfair/artifactory/surf/certs-mitm/ZscalerRootCertificate.pem /usr/local/share/ca-certificates/ZscalerRootCertificate.crt
RUN update-ca-certificates -v

# Install Node.js 18.x
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install the specific Bundler version required by Gemfile.lock
RUN gem install bundler -v 2.4.2

# Install Ruby gems first for better Docker cache usage
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Install npm dependencies first for better Docker cache usage
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .
