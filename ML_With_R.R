library(tidyverse)
# upload the csv
dc <- read_csv("DCEU_Profits.csv")
View(DCEU_Profits)
dim(dc)
sapply(dc, class)
head(dc)
validation_index <- createDataPartition(dc$'Worldwide Gross', p=0.80, list=FALSE)