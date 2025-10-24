<div align="center">

![Apex Logo](Presentation/data/apex-logo.svg)

# Apex: AI-Powered Personal Training Optimizer

**Maximize your training results with machine learning**

[![GitHub](https://img.shields.io/badge/GitHub-Rin--Ha--n%2FAppliedAI-blue?logo=github)](https://github.com/Rin-Ha-n/AppliedAI)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Applied AI](https://img.shields.io/badge/Course-Applied%20AI-orange)](https://www.ost.ch)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Features](#-features)
- [Technical Stack](#-technical-stack)
- [Data Architecture](#-data-architecture)
- [Machine Learning Pipeline](#-machine-learning-pipeline)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Ethical Considerations](#-ethical-considerations)
- [Team](#-team)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Apex** is a conceptual AI-powered personal training optimizer presented as a theoretical project for the **Applied AI** course at **OST - Eastern Switzerland University of Applied Sciences**.

This repository contains our presentation exploring how machine learning could be applied to create personalized workout plans based on individual goals, biological attributes, available time, and fitness preferences. While Apex is not a working application, it demonstrates our understanding of ML concepts, data processing techniques, and ethical considerations in AI development.

### Theoretical Benefits

- ✅ **Data-driven optimization** - Personalized training vs generic programs
- ✅ **Lower injury risk** - Plans based on personal condition & medical history
- ✅ **Time efficient** - Optimized workouts for available schedules
- ✅ **Open source approach** - Transparent algorithms & community-driven improvements
- ✅ **Continuous learning** - Model would improve with more user data

---

## 🔍 Problem Statement

Traditional training programs often fail to produce optimal results because:

- Training methods are far from optimized for individual users
- Finding suitable exercises is challenging
- Time constraints limit workout effectiveness
- Generic programs ignore biological and medical factors

**Apex proposes a solution** using machine learning to analyze user data and generate personalized training plans that would maximize results while minimizing injury risk.

---

## 🚀 Proposed Features

### Core Functionality (Conceptual)

- **Personalized Training Plans** - Customized workout periodization
- **Exercise Recommendations** - Optimal exercises based on goals & constraints
- **Nutrition Guidance** - Alimentation improvement tips
- **Progress Prediction** - Expected improvement percentages with diminishing returns modeling

### Technical Approach

- **SMOTE Implementation** - Would handle imbalanced datasets (e.g., 90% fit vs 10% overweight users)
- **Multi-Algorithm Approach** - Combines classification & regression models
- **Cross-Validation** - Would ensure model generalization
- **PCA Dimensionality Reduction** - Efficient data processing
- **Real-time Data Integration** - Potential smartwatch & wearable device support

---

## 🛠 Technical Stack

### Machine Learning Algorithms

#### Classification
- **K-Nearest Neighbors (KNN)** - Similarity-based user matching
- **Random Forest** - Ensemble decision trees for robust predictions
- **Naive Bayes** - Probabilistic classification
- **Logistic Regression** - Binary outcome predictions

#### Regression
- **Linear Regression** - Continuous value predictions (training time, calories, etc.)
- **Gradient Boosting** - Advanced ensemble method for accuracy

### Data Processing
- **SMOTE** (Synthetic Minority Oversampling Technique) - Balances underrepresented groups
- **Cross-Validation** - K-fold validation for model reliability
- **PCA** (Principal Component Analysis) - Reduces dimensionality while preserving variance
- **Standardization & Normalization** - Data preprocessing for algorithm optimization

### Development Tools
- Python 3.x
- Scikit-learn
- Pandas & NumPy
- Matplotlib/Seaborn for visualization

---

## 📊 Data Architecture

### Input Attributes
- **Goal Definition** - Muscle building, weight loss, endurance, etc.
- **Time Constraints** - Available training days & session duration
- **Exercise Preferences** - Favorite exercises & equipment access
- **Biological Data** - Height, weight, body fat %, age, medical conditions
- **Nutrition Info** - Diet type, cuisine preferences, supplements

### Output Attributes
- **Training Periodization** - Structured workout schedule
- **Exercise List** - Specific exercises with sets/reps/intensity
- **Nutrition Tips** - Dietary improvements aligned with goals
- **Improvement Predictions** - Expected progress percentages

### Data Sources
- 📚 **Research & Literature** - Scientific papers & studies
- 📱 **User-Generated Data** - Surveys, questionnaires, smartwatch data
- 💪 **Real-World Data** - Gyms, fitness centers, athlete testers
- 🔄 **Continuous Growth** - Ongoing data collection from users

---

## 🔬 Machine Learning Pipeline

### 1. Data Preprocessing
```
Raw Data → Unit Conversion (SI units) → Standardization/Normalization → Feature Engineering
```

### 2. Imbalance Handling (SMOTE)
```python
# Example: 10% overweight users → 27% after SMOTE
User A: Age 35, Weight 195kg, Beginner
User B: Age 40, Weight 200kg, Beginner
→ Synthetic User C: Age 37, Weight 197kg, Beginner ✨
```

### 3. Model Training
- Supervised learning with labeled data
- Classification for categorical outcomes (training type)
- Regression for continuous predictions (training minutes/week)

### 4. Validation & Deployment
- Cross-validation ensures generalization
- Continuous model improvement with new user data

---

## � Viewing the Presentation

```bash
# Clone the repository
git clone https://github.com/Rin-Ha-n/AppliedAI.git
cd AppliedAI/Presentation

# View the presentation
# Open Presentation.html in your browser
# Or view Presentation.md with Marp extension in VS Code
```

### Export to PDF (requires Marp CLI)
```bash
npm install -g @marp-team/marp-cli
marp Presentation.md --pdf
```

---

## 📁 Project Structure

```
AppliedAI/
├── .gitignore                  # Git ignore rules
├── Presentation/
│   ├── Presentation.md          # Marp presentation source
│   ├── Presentation.html        # Exported HTML slides
│   ├── Presentation.pdf         # Exported PDF slides
│   ├── Presentation notes.md    # Speaker notes
│   ├── data/
│   │   ├── apex-logo.svg       # Apex logo
│   │   ├── qrcode.png          # GitHub QR code
│   │   ├── image.png           # Presentation images
│   │   ├── classification.png  # ML diagram
│   │   ├── regression.png      # ML diagram
│   │   └── ...                 # Other assets
│   └── key-remapper-extension/ # VS Code extension
├── Notes.md                    # Project development notes
└── README.md                   # This file
```

---

## ⚖️ Ethical Considerations

### Privacy & Compliance
- **GDPR compliance** - Handling sensitive biometric & health data responsibly
- **Data encryption** - Secure storage & transmission
- **User consent** - Transparent data usage policies

### Social Impact
- **Labor market** - Potential displacement of personal trainers
- **Economic effects** - Reduced gym membership dependency
- **Algorithmic bias** - Risk of ML models favoring young, fit users
  - Can lead to inappropriate recommendations for elderly/underrepresented groups
  - Mitigation: SMOTE balancing & diverse training data

### Dual-Use Concerns
- Technology could be repurposed beyond personal fitness (e.g., military training)
- Ethical guidelines for responsible use

---

## 👥 Team

<table>
  <tr>
    <td align="center">
      <b>Aaron Ricca</b><br>
      Electrical & Computer Engineering<br>
      Climber<br>
      <a href="https://github.com/Rin-Ha-n">GitHub</a>
    </td>
    <td align="center">
      <b>Derya Özsoy</b><br>
      Informatik<br>
      Kickboxing<br>
    </td>
  </tr>
</table>

**Course:** Applied AI - OST (Eastern Switzerland University of Applied Sciences)

---

## 🤝 Contributing

This is an educational project for the Applied AI course. While Apex is a theoretical concept, feedback and suggestions on the presentation are welcome!

### Potential Implementation Areas
If this concept were to be developed into a real application, it could include:
- Additional ML algorithms (XGBoost, Neural Networks)
- Mobile app integration
- Real-time wearable device sync
- Expanded exercise database
- Multi-language support

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OST Applied AI Course** - For the educational framework
- **Class Lectures** - Foundational ML concepts
- **Scientific Community** - Research papers on SMOTE, ensemble methods, and sports science
- **Open Source Libraries** - Scikit-learn, Pandas, NumPy, and others

### References

1. **Class lectures** - OST Applied AI course materials

2. Brownlee, Jason. "SMOTE for Imbalanced Classification with Python". *MachineLearningMastery.com*, 16 January 2020. [https://www.machinelearningmastery.com/smote-oversampling-for-imbalanced-classification/](https://www.machinelearningmastery.com/smote-oversampling-for-imbalanced-classification/)

3. ChatGPT. "ChatGPT". [https://chatgpt.com/?locale=en-US](https://chatgpt.com/?locale=en-US)

4. Dorogush, Anna Veronika, Vasily Ershov, and Andrey Gulin. "CatBoost: Gradient Boosting with Categorical Features Support". *arXiv:1810.11363*. Preprint, arXiv, 24 October 2018. [https://doi.org/10.48550/arXiv.1810.11363](https://doi.org/10.48550/arXiv.1810.11363)

5. "Explainable Boosting Machine — InterpretML Documentation". [https://interpret.ml/docs/ebm.html](https://interpret.ml/docs/ebm.html)

6. "Gradient Boosting Trees vs. Random Forests | Baeldung on Computer Science". 25 February 2022. [https://www.baeldung.com/cs/gradient-boosting-trees-vs-random-forests](https://www.baeldung.com/cs/gradient-boosting-trees-vs-random-forests)

7. Moronta, Sendoa. "Generating, Comparing and Evaluating Synthetic Tabular Data with SDV". *Medium*, 18 September 2025. [https://medium.com/@sendoamoronta/generating-comparing-and-evaluating-synthetic-tabular-data-with-sdv-1198e97c8603](https://medium.com/@sendoamoronta/generating-comparing-and-evaluating-synthetic-tabular-data-with-sdv-1198e97c8603)

8. Ph.D, Davide Gazzè. "SDV: Generate Synthetic Data Using GAN and Python". *Medium*, 30 March 2023. [https://medium.datadriveninvestor.com/sdv-generate-synthetic-data-using-gan-and-python-4c26a1e4b3c2](https://medium.datadriveninvestor.com/sdv-generate-synthetic-data-using-gan-and-python-4c26a1e4b3c2)

9. Step By Step Data Science. "LightFM Tutorial for Creating Recommendations in Python". [https://www.stepbystepdatascience.com/hybrid-recommender-lightfm-python](https://www.stepbystepdatascience.com/hybrid-recommender-lightfm-python)

10. Wikipedia. "Cross-validation (statistics)". [https://en.wikipedia.org/w/index.php?title=Cross-validation_(statistics)&oldid=1314208627](https://en.wikipedia.org/w/index.php?title=Cross-validation_(statistics)&oldid=1314208627)

11. Wikipedia. "Synthetic minority oversampling technique". [https://en.wikipedia.org/w/index.php?title=Synthetic_minority_oversampling_technique&oldid=1307265510](https://en.wikipedia.org/w/index.php?title=Synthetic_minority_oversampling_technique&oldid=1307265510)

---

<div align="center">

**[⬆ Back to Top](#apex-ai-powered-personal-training-optimizer)**

Made with 💪 by Aaron Ricca & Derya Özsoy

</div>
