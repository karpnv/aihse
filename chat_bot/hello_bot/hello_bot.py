from deeppavlov.core.agent import Agent, HighestConfidenceSelector
from deeppavlov.skills.pattern_matching_skill import PatternMatchingSkill

hello = PatternMatchingSkill(responses=['Hello world! :)'], patterns=["hi", "hello", "good day"])
bye = PatternMatchingSkill(['Goodbye world! :(', 'See you around.'], ["bye", "chao", "see you"])
fallback = PatternMatchingSkill(["I don't understand, sorry :/", 'I can say "Hello world!" 8)'])# Q#"6{E
HelloBot = Agent([hello, bye, fallback], skills_selector=HighestConfidenceSelector())
for i in range(10):
    var = input("Please enter something: ")
    print("You entered " + str(var))
    resp=HelloBot([var])[0]
    print('Bot response', resp)
#print(HelloBot(['Hello!', 'Boo...', 'Bye.']))Q#"6{E


