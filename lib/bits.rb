# LEVEL 2: METHODS AND CLASSES
#
# # With nil attributes
# def post(title, lead = nil, desc = nil)
#   title + "#{lead}" + "#{desc}"
# end
# puts post('title')
# puts post('title', 'lead')
# puts post('title', 'lead', 'desc')
#
# ######################################################
#
# # With hash
# def post(title, options = {})
#   title + "#{options[:lead]}" + "#{options[:desc]}"
# end
# puts post('title')
# puts post('title', lead: 'lead')
# puts post('title', desc: 'desc', lead: 'lead')
#
# ######################################################
#
# # Exceptions
# def post(title)
#   unless title
#     raise Exception.new
#   end
#   title
# end
#
# begin
#   post(title = nil)
# rescue Exception
#   warn "Warning! Exception!"
# end
# #
# ######################################################
# #
# # Splat arguments
# def post(title, *content)
#   "#{title} " + "#{content.join(' ')}"
# end
#
# puts post('title', 'lead', 'short_desc', 'long_desc')
# #
# ######################################################
# #
# # Class
# class FullName
#   def initialize(first, last = nil)
#     @first = first
#     @last = last
#   end
#   def format
#     [@first, @last].compact.join(', ')
#   end
# end
#
# user_names = []
# user_names << FullName.new('Vasiliy')
# user_names << FullName.new('Vasiliy', 'Mariinskiy')
# user_names << FullName.new('Basil', 'Mariinskiy')
# user_names.each { |n| puts n.format }
# #
# ######################################################
# #
# # attr_accessor
# class FullName
#   attr_accessor :first
#   attr_reader :last
#   def initialize(first, last = nil)
#     @first = first
#     @last = last
#   end
#   def format
#     [@first, @last].compact.join(', ')
#   end
# end
#
# user_name = FullName.new('Vasiliy', 'Mariinskiy')
# user_name.first = 'Nikolay'
# puts user_name.first
# # user_name.last = 'Kutuzov'
# puts user_name.last
# #
# ######################################################
# #
# # re-open
# class FullName
#   def initialize(first, last = nil)
#     @first = first
#     @last = last
#   end
#   def to_s
#     [@first, @last].compact.join(', ')
#   end
# end
#
# name = FullName.new('Vasiliy', 'Mariinskiy')
# puts name.to_s
# #
# ######################################################
# #
# # self
class FullName
  attr_accessor :first
  def initialize(first)
    self.first = first # calls 'first=' method
  end
end

name = FullName.new('Vasiliy')
puts name.first