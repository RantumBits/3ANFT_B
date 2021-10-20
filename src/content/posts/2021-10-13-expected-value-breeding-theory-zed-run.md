---
template: blog-post
title: Expected Value Breeding Theory - ZED Run
slug: /ZED-breeding-theory
date: 2021-10-12 21:55
description: "ZED Run NFT Breeding strategy on a budget. "
featuredImage: /assets/zedbreeding.png
---
By: [Mostly Stable](https://zed.run/stable/mostly-stable) and the [All About Affordable NFT podcast](https://3anft.com/episodes/)

The **Expected Value Breeding Theory** is a practical way to breed in an uncertain environment for new and growing stables that doesn’t require an advanced stats program or a massive budget. It is more practical math than it is theory but it is more likely to catch on to call it a theory in ZED world. 

The goal of Expected Value Breeding Theory is to optimize for the highest quality breed attempts at the lowest possible price. The expected value of a breed is calculated by factoring in breed cost, racing cost, donkey floor for breed type balanced against the actual odds of getting a ‘winning’ horse based on the current bred population. Thanks to a recent update to the KnowYourHorses.com filtered horse queries it is now possible to quickly calculate ‘winning’ horses vs total bred population.![](https://lh4.googleusercontent.com/vRZiUco1YhorVk3gcD2QR6MgC2RYsA87iovHcuQS8CU2RpeHnYiA4Q8RtC5FBILnOGl6MOYHM5tUpDA-jBE_VZdBqfpEptK9_7PU7ogTZ_a2YSktFIwp4iBovm3km99kov-PkbwK=s0)

**Rules Expected Value Breeding Theory:**

* Rule 1: Bargain hunt for base ability - don’t pay for pedigree (name/win rate/speed/dist preference)
* Rule 2: Know the odds of a ‘winning’ horse 
* Rule 3: The rules may change. ZED can and has changed the algo

Expected Value Breeding Theory is less a theory and more of a rational approach to breeding in the current landscape of ZED Run. Combining what has been stated by the ZED team, researched by the community and shown in data analysis of the 126k horses in the game. This approach embraces that there is a random element to breeding and a black box genetic algo.

This approach can also be used to create a pricing anchor for bred horses in the open market. 

### DIY Expected Value Breeding Math

Trying to ‘get good at breeding’ might be akin to getting good at flipping a coin and it might change in a few months due to breeding algo updates. So it is important to manage the breeding investment and spread out attempts to get the upside while you evolve a breeding strategy.  

It was important to us to develop an approach that doesn’t require a stats degree or an expensive/exclusive tool to figure out a breeding strategy. The following maps out the basic equation:

\
(Breed Fee + Training Cost) - (*donkey floor)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

(Total winning horses)/(Total population of bred horse blood/breed/gen)

\
**Defining the variables**

**Breed Fee**: [Pretty straightforward from ZED](https://guide.zed.run/breeding/pricing), and for our example, we’ll assume you aren’t breeding in stable (35% discount) or between two owned stables (54% assuming you do 7 day).

Total population of bred horse bloodline/breed type/genotype: On the surface this is clear, search for the total population of the type of horse you’re intending to breed. However, this can get a little confusing with certain breed types combinations with genotype. If the genotype narrows the total population below 1,000 beware the sample size. Consider trying with and without the genotype as it is a tertiary factor in horse quality. The big asterisk here is with exclusive and elite horses that can keep their breed type over generations and will develop a much larger genotype range over time. IE someone with a perverse sense of humor and disproportionate determination will breed a Nak exclusive with genotype 268 which will clearly be a lower quality tier horse than one in the teens… 

**Total Winning horses**: Frankly, there are compromises that need to be made here and each stable owner should decide for themselves. Fortunately, a new update from KnowYourHorses.com (that we requested) will allow you to decide what a ‘winning horse’ is for your stable strategy! In an ideal world we’d choose something like over 50 races, with odds under 12 (if available), over 40% heat, profitable for $2/$5 races ignoring higher stakes/free races. Speed in the top 10% for at least one distance. In practice, this kind of multivariate filter actually reveals a shockingly small percentage of horses once drilled down. So, just remember lowered expectations correlate to happiness in life and horses :P 

**Donkey Floor**: Like it sounds, this is the floor price for the lowest prices on the type of horse you’re trying to breed with at least 20 races. The 20 race min is because this approach suggests that you race every horse at least 20 times to determine if it is a ‘winner’. This is also dependent on the gender which should be 50/50, though fillies trend about 20% higher than colts so add 10% to floor to simulate if that applies to your breeding type. 

There is also a BIG assumption that there is a market for the bred, raced horse you have.  One look at recent sales volume trends from Opensea paint the picture. For the most realistic cost for breeding a ‘winner’ start by assuming you might not be able sell any donkeys until ZED figures out a logical class system.\
\
![](https://lh5.googleusercontent.com/JHbFuPrVXcIXVi_f1vk5aDZJfOK7yhM8tS88JuSC4crfDH9k5Td1FfCQXkZjS7G2rvngFKAeDeY4UDZmgGPGcuWrgp6Dwx6rdTbcH5nTX1yiFsDA4DW4CCDms1tmHk8R2TC4d2u8=s0)\
(Opensea: <https://opensea.io/collection/zed-run-official?tab=activity>) 

**Training Cost**: This is the cost of at least 20 races at the min race cost of .0007 ETH to determine the quality of your horse. The problem with selling Unraced/Unnamed is that it won’t let you capture the upside value of great horses. What’s more, since the removal of odds in September, there is small difference in price of unraced and low raced horses depending on gen/breed type.

**Total Population of horses**: The simplest way to show this is to select the blood/breed/geno of the intended horse you are breeding in the KYH filter and grab the total results. A flaw with this approach is that it hides false positives (winning horses that haven't been raced yet), this would reduce the percieved odds of breeding a winner.    A slighly more accurate query would be to select horses with at least 1 race as the base population, relying on the assumption that owners would have choosen to keep racing potential winners. Beware of sample size based on the blood/breed/geno you're creating. 

### Full Walkthrough of Calculating EV Breeding Formula

 Select what a winning horse is for the breed type/bloodline/genotype with the filters on KYH. Understand the total population of that type of horse that qualifies as ‘winning’ over the population of that horse type.

In this example of looking up profitable Nakamoto Exclusive horses, [there are 5,245 in the system](https://knowyourhorses.com/horses?query%5Bowner%5D=&query%5Bsort_criteria%5D=horse_id&query%5Bsort_direction%5D=asc&query%5Bbloodline%5D%5B%5D=&query%5Bbloodline%5D%5B%5D=Nakamoto&query%5Bbreed_type%5D%5B%5D=&query%5Bbreed_type%5D%5B%5D=exclusive&query%5Bhorse_type%5D%5B%5D=&query%5Bgenotype%5D%5B%5D=&query%5Bclass%5D%5B%5D=&query%5Bcolor%5D%5B%5D=&query%5Bcolor_group%5D%5B%5D=&query%5Bcolor_rarity%5D%5B%5D=&query%5Bsuper_coat%5D=&query%5Bname%5D=&query%5Bminimum_heat_percentage%5D=&query%5Bmaximum_heat_percentage%5D=&query%5Bminimum_win_rate%5D=&query%5Bmaximum_win_rate%5D=&query%5Bminimum_place_rate%5D=&query%5Bmaximum_place_rate%5D=&query%5Bminimum_show_rate%5D=&query%5Bmaximum_show_rate%5D=&query%5Bminimum_number_of_races%5D=&query%5Bmaximum_number_of_races%5D=&query%5Bminimum_profit%5D=&query%5Bmaximum_profit%5D=): 

![](https://lh5.googleusercontent.com/QuVGQoZ8APBq28JC9IMyS6QPd9mrltBy8D0_N_mFvEUOvo66RvRODug3h5lHgudjGFyInI3wibTuGN4anOmaFxt8Q2Ulv9QZ2MrhS5KpVrOzigRAiGuQG0Oqf1PuwMC_Wxev7e81=s0)

Then applying the basic ‘winning horse’ filter we’ve chosen of [profitable (.0001ETH) over 30 race filter](https://knowyourhorses.com/horses?query%5Bowner%5D=&query%5Bsort_criteria%5D=horse_id&query%5Bsort_direction%5D=asc&query%5Bbloodline%5D%5B%5D=&query%5Bbloodline%5D%5B%5D=Nakamoto&query%5Bbreed_type%5D%5B%5D=&query%5Bbreed_type%5D%5B%5D=exclusive&query%5Bhorse_type%5D%5B%5D=&query%5Bgenotype%5D%5B%5D=&query%5Bclass%5D%5B%5D=&query%5Bcolor%5D%5B%5D=&query%5Bcolor_group%5D%5B%5D=&query%5Bcolor_rarity%5D%5B%5D=&query%5Bsuper_coat%5D=&query%5Bname%5D=&query%5Bminimum_heat_percentage%5D=&query%5Bmaximum_heat_percentage%5D=&query%5Bminimum_win_rate%5D=&query%5Bmaximum_win_rate%5D=&query%5Bminimum_place_rate%5D=&query%5Bmaximum_place_rate%5D=&query%5Bminimum_show_rate%5D=&query%5Bmaximum_show_rate%5D=&query%5Bminimum_number_of_races%5D=30&query%5Bmaximum_number_of_races%5D=&query%5Bminimum_profit%5D=.0001&query%5Bmaximum_profit%5D=), the result shows there are 461: 

![](https://lh3.googleusercontent.com/1_YeB0WPx75hQKlyJ-GkIx441Iggn0ipvZUQRueini26zfbwl7nMPcC-kKPUefCaa-vMbqBkAA92-4mpNOgbmncQQ2-5oCrkPe-e2m-uTn4Fx1RDeCY9Hrlr3tlMW8Js9hHOWd5T=s0)

Assuming you have a Legendary Nakamoto mare here is the calculation for breeding with a Legendary Naka stud. Going in we’re able to see that there is roughly an 8.7% chance of getting a profitable horse (461 | winning horse)  /  (5,245 | Total population), based on the general population of bred horses. 

(.1305 ETH | min breed fee) - ( 0 | Donkey sales) + (only free races)\
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\__ =    1.48 ETH \
(461 | winning horses)  /  (5,245 | Total population)  ~   8.7%  

In other words, with an 8.7% probability of producing this kind of horse, it would cost 1.48 ETH to produce over time considering the number of attempts that the odds suggest it would take.

**WAIT but what about selling the donkeys?**

This EV calculation ignores the ability to sell the donkeys that are bred along the way to getting a racer. So, what about the donkeys and tier 2 horses produced? Yes, this equation ignores the ability to sell non-winning horses in the breeding journey. For this, we encourage you to keep a spreadsheet for the breed cost vs floor of each horse like the following:

![](https://lh6.googleusercontent.com/FWSVVcueCGZ89eW2tP2ZCrvUQlBgD4a2GSRnm5k_MthYaupopkuLSlddNcR5Lc1PrYFrvOkh0PkrsJ0bgN4uWbR5pW136ptb-TD1H8NtTlQgVSwEXB8cOu5Mq0r7_9U6yVud-596=s0)

Yeah, we left off Buterin’s here, we also left of scratch and win lotto tickets too which might be a better investment. JK, we have Butes in our stable but the volume of these makes the floor impossibly low for a lot of breeds, plus without a lower class to race in the upside isn’t there right now.  

At the present floor prices for bred horses, it seems that every floor is often below the min breed fee. This calculation changes based on the in-stable discount that may apply as well. But, lets continue with the breeding an Exclusive Nak:  

(.1305 ETH | min breed fee) - ( .11  |  Donkey Floor Sales)\
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\__ =   .256 ETH \
(461 | winning horses)  /  (5,245 | Total population)  ~   8.7%  

**But, wait… What about racing costs!**

This is actually important because if you are breeding for a winner it means you’ll need at least 20 races across distances to figure out what kind of pony you have. While it might be possible to do this with free races, we’re going to assume you don’t have the luck/hours this would require ([great video on how to get into free races](https://www.youtube.com/watch?v=jj2eaYKOH7E)). This just adds to the breeding or attempt cost in the calculation as follows:

(.1305 ETH | min breed fee) - ( .11  |  Floor) +  (.014 ETH | race testing ~ 20 races @ .0007)\
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\__\
(461 | winning horses)  /  (5,245 | Total population)  ~   8.7%  

\=    .431 ETH

The final step is to figure out what is the relative floor for the ‘winning’ horse to determine what the best-case scenario sale will result in. Looking at [KYH for recent sale data for your winning horse filter](https://knowyourhorses.com/market/sales?query%5Bsort_criteria%5D=sale_date&query%5Bsort_direction%5D=desc&query%5Bminimum_price%5D=&query%5Bmaximum_price%5D=&query%5Bbloodline%5D%5B%5D=&query%5Bbreed_type%5D%5B%5D=&query%5Bhorse_type%5D%5B%5D=&query%5Bgenotype%5D%5B%5D=&query%5Bclass%5D%5B%5D=&query%5Bcolor%5D%5B%5D=&query%5Bcolor_group%5D%5B%5D=&query%5Bcolor_rarity%5D%5B%5D=&query%5Bsuper_coat%5D=&query%5Bowner%5D=&query%5Bname%5D=&query%5Bminimum_heat_percentage%5D=&query%5Bmaximum_heat_percentage%5D=&query%5Bminimum_win_rate%5D=&query%5Bmaximum_win_rate%5D=&query%5Bminimum_place_rate%5D=&query%5Bmaximum_place_rate%5D=&query%5Bminimum_show_rate%5D=&query%5Bmaximum_show_rate%5D=&query%5Bminimum_number_of_races%5D=30&query%5Bmaximum_number_of_races%5D=&query%5Bminimum_profit%5D=.0001&query%5Bmaximum_profit%5D=) will then show the general floor for that type of horse. For this example, we see a range of around .1 to .35 in recent sales in the current October 2021 market. So, in summary, yikes you might want to reconsider this decision if the current market continues to fall.



## Final Thought

We created this because we believe in ZED and the community around it - which is hilarious and generous. We also want to help new stables interested in breeding not lose their shirt as the total bred population continues to grow. While it is clear there is a lottery system it is important to us that players get to play that lottery with fair odds that make the game fun.



![]()