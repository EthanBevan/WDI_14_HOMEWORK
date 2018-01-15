loop do
	#loop so if they dont put data.txt they can try again.

puts('What is your file name?')
nametxt = gets.chomp
counter = 0
if nametxt == 'data.txt'
lines = File.readlines(nametxt).each do |line|
  counter = counter + 1
end
  puts "#{counter} lines total"
end

end


























