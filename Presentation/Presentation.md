---
marp: true
theme: gradient
paginate: true
footer: '![image w:50 h:50](https://avatars.githubusercontent.com/u/48515106?s=200&v=4)Ricca Aaron & Derya Özsoy, Applied AI'
transition: fade

style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  
  section.centered-narrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  section.centered-narrow h1,
  section.centered-narrow h2 {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

---

<div class="columns">
<div>

# Training optimizer
# add nice image

</div>
<div>

* Aaron Ricca
    * Eletrical and computer engineering
    * Ex professional skier
    * Climber


* Derya Özsoy
    * Informatik
    * Kickboxing

<!-- Start Aaron -> Derya -->
--- 

# <!--fit--> How many of you
# <!--fit--> train with results
# <!--fit--> far from expectations?
<!-- Derya -->
<!-- Here we should ask the audience to involve it, maybe just with a hand raise -->

---

# What's the problem ?
* training is far from optimized
* hard to find good exercises
* time is always too little
![bg right:50% w:500](data/image.png)
<!-- Derya -->
---

# Our AI application
* Input every data available
* Outputs personalized training plans
<!-- i will try to put a diagramm wich is showing of our input and output -->
<!-- Derya -->
---

# Data time !
<div class="columns">
<div>

## Input attributes:
* Objective [categorical]
* Available time [categorical]
* Favorite exercises [categorical]
* Biological attributes (Height, body fat%, medical condition, etc.)
* Alimentation (Diet type, enhancing substances, etc.)

</div>
<div>

## Output attributes:
* Training periodization
* List of exercises
* Alimentation improvement tips
* Corresponding improvement % [integer]

<!-- Aaron -->
---

# Data availability
* Internet
  * Scientific papers
  * Studies
* Surveys
* Smartwatches
* Gyms/Coaches
* Testers

<!-- Aaron -->
---

# Normalization / standardization

* SI units
* Normalization/Standardization of continuos attributes
<!-- normalization of continuous attributes could prove useful in running a k-nn algorithm to find correlation in attributes we didn't think had correlation (same goes for standardization in the case of a linear regression-->

<!-- Aaron -->
---

# Description of the possible solution

* Functionalities
  * Data entry by the End User
  * Data from Internet
  * The End user receives a personalized training plan.
<!--Derya -->
---
# Methods, tools and Algorithms
<!---functionalities (insert data and receive a personalized training plan, etc.)
#Supervised Learning--->
  * Supervised Learning
  * K-Nearest Neighbors (KNN)
<!-- machine learning many would be used and then assembled together -->
  * Random Forests

<!--Description and justification of the methods, tools, and algorithms used
- Random Forest: data structure (date from End User)
  provides robust and interpretable results
- KNN: Simple implementation, good results are achieved with similar user types. 
-->
<!-- Derya -->
---

<!-- _class: centered-narrow -->

# <!--fit--> Few data?
# <!--fit--> -> More data!
## <!--fit--> 🧪 Synthetic data!

<!-- Aaron -->
---

# SMOTE  
### Synthetic Minority Oversampling Technique  

* Used when we have **imbalanced datasets**  
  → e.g., 90% fit people and only 10% overweight  
* Problem: ML models may **ignore the minority class**  
* SMOTE helps by **creating new synthetic examples** of the minority class instead of just copying them  

---

# How SMOTE Works (Simple Example)

Imagine you have these few minority points:

SMOTE picks two close points (neighbors) and makes a **new one in between**  

* Example:  
  * Point A: (2, 4)  
  * Point B: (4, 6)  
  * New point: somewhere between them, e.g., (3, 5)  

✅ This makes the minority class **denser and more balanced**

---

# Why better?
* Open source
* Effective optimization
* Lower risk of injury
* First of it's kind!
* Always improving!

<!-- Aaron -->
---
# Possible risks, barriers and obstacles
* Incomplete data can lead to incorrect results.
  * can lead to injuries due to incorrect training suggestions
* Requires a lot of time and resources.
  * high costs und delays
  * Data must always be updated and maintained.
* Data breach and Data loss
<!--Description of the risks associated with an 
introduction/implementation of the solution-->
<!--Description of possible barriers and obstacles to the introduction/implementation of the solution
-->

<!-- Derya -->
---

# Ethical consideration
* Privacy issues GDPR
* Trainers losing their job
<!--Aaron-->
* Gyms could get less subscriptions
* Biases -> <!-- data might be biased towards young men as their fitness abilities improves biologically better, making the algorithm advise too hard/many exercise to an older person ending in an injury as they trust our platform-->Risk of injuries <!-- this could be fault of the algorithm or fault of people providing faulty data-->
<!-- As anecdote, the people who created  chips that are able to recognize faces, are now used for killing with drone and not to find people or criminals or child etc.-->

<!-- Both -->

---
# Methods and algorithms
* Gradient boosting 
  * More accurate
  * May be over-fitted
<!-- Who is presenting this slied? :D -->
---

# Sources

--- 