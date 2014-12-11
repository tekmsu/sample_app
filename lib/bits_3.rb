# LEVEL 3: CLASSES
#
# Visibility
# class User
#   attr_accessor :name
#   def initialize(name)
#     @name = name
#   end
#
#   def up_vote(friend)
#     bump_karma
#     # friend.bump_karma
#   end
#
#   protected
#
#   def bump_karma
#     puts "karma up for #{name}"
#   end
# end
#
# joe = User.new 'joe'
# leo = User.new 'leo'
# joe.up_vote(leo)
# #
# ######################################################
# #
# # super for inheritance
# class User
#   def initialize(name)
#     @name = name
#   end
# end
#
# class Follower < User
#   def initialize(name, follower)
#     @follower = follower
#     super(name)
#   end
#
#   def relationship
#     puts "#{@name} follower #{@follower}"
#   end
# end
#
# follower = Follower.new('Vasiliy', 'Petr')
# follower.relationship
#
# ######################################################
#
# # super for inheritance
# class Grandparent
#   def my_method(arg)
#     puts "Grandparent method #{arg}"
#   end
# end
#
# class Parent < Grandparent
# end
#
# class Child < Parent
#   def my_method(arg)
#     super # super(arg) or set arg super('arg2')
#     puts "Child method #{arg}"
#   end
# end
#
# child = Child.new
# child.my_method('arg')
#
# ######################################################
#
# # exercise 2-3
# class Game
#   attr_accessor :name, :year, :system
#   attr_reader :created_at
#
#   def initialize(name, options={})
#     self.name = name
#     self.year = options[:year]
#     self.system = options[:system]
#     @created_at = Time.now
#   end
#
#
#   def ==(game)
#     name == game.name &&
#         system == game.system &&
#         year == game.year
#   end
# end
#
# class Library
#   attr_accessor :games
#
#   def initialize(games)
#     self.games = games
#   end
#
#   def add_game(game)
#     self.games << game
#     log(game)
#   end
#
#   def has_game?(search_game)
#     for game in games
#       return true if game == search_game
#     end
#     false
#   end
#
#   private
#
#   def log(game)
#     puts "Name = #{game.name} #{game.year} #{game.system}"
#   end
# end
#
# games = []
# games << Game.new('Heroes')
# library = Library.new(games)
# game2 = Game.new('DOOM')
#
# unless library.has_game?(game2)
#   library.add_game(game2)
# end
#
# library.games.each { |g| puts g.name }
# #
# # ######################################################
# #
# # # exercise inheritance
# class ArcadeGame < Game
#   attr_accessor :weight
#   def initialize(name, options={})
#     super
#     self.weight = options[:weight]
#   end
# end
# #
# # ######################################################
# #
# # # exercise inheritance
# class Game
#   attr_accessor :name, :year, :system
#   attr_reader :created_at
#   def initialize(name, options={})
#     self.name = name
#     self.year = options[:year]
#     self.system = options[:system]
#     @created_at = Time.now
#   end
#
#   def to_s
#     self.name
#   end
#
#   def description
#     "#{self} was released in #{self.year}."
#   end
# end
#
# class ConsoleGame < Game
#   def to_s
#     "#{self.name} - #{self.system}"
#   end
# end
