require 'webmock/rspec'

RSpec.configure do |config|
  config.before(:each) do
    stub_request(:get, "https://google.com/").
      with(
        headers: {
    	  'Accept'=>'*/*',
    	  'Accept-Encoding'=>'identity',
    	  'User-Agent'=>'MetaInspector/5.12.1 (+https://github.com/jaimeiniesta/metainspector)'
        }).
      to_return(status: 200, body: "", headers: {})
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.order = :random

  Kernel.srand config.seed

  WebMock.disable_net_connect!(allow_localhost: true)
end
