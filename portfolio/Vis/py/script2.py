import pandas as pd
import operator

term_frequency = {}
fileNames = []

if __name__ == '__main__':

    # print(csv_filtered)

    import glob, os
    fileName = ""
    pd.DataFrame.from_dict(term_frequency, orient="index").to_csv("mass_data.csv")
    os.chdir("../data")
    for file in glob.glob("*.csv"):
        #csv = pd.read_csv('../data/' + file)
        csv = pd.read_csv('../data/' + file)
        for title in csv.iterrows():
            csv_Series = title[1].loc['title']
            csv_Series.replace('/', '').replace('.', '').replace('[', '').replace(']', '')
            csv_split = csv_Series.lower().split()
            #csv_sorted = csv_Series.replace('/' | ',' | '.' | ' ' | '[' | ']', '').split()

            #print(csv_sorted)

            for word in csv_split:

                if word in term_frequency:
                    term_frequency[word] += 1
                else:
                    term_frequency[word] = 1

                if fileName == file:
                    counted += 1
                else:
                    counted = 1

                # term_frequency_sorted_title = sorted(term_frequency.items(), key=operator.itemgetter(1))
                # term_frequency_sorted_word = sorted(term_frequency.items(), key=operator.itemgetter(0))

                #print("\n".join(map(str, term_frequency_sorted_title)))
                #print(term_frequency)

                fileName = file

            print("item complete = " + file)
            print("item count = " + str(counted))
        tf = pd.DataFrame.from_dict(term_frequency, orient="index")
        print (tf)
        # tf.to_csv("../analysis/mass_data.csv")
