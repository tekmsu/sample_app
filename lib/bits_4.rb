# # Hash
# options = { locale: 'en', name: 'Petr' }
# defaults = { locale: 'ru', key: '8896' }
# puts options.reverse_merge(defaults)
# puts options

new_options = { name: 'Petr', title: 'Writer', age: '25' }
puts new_options.except(:age)
puts new_options.assert_valid_keys(:name, :title, :age)