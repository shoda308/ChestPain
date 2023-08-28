from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import numpy as np
import subprocess
import make_learning_data


def RandomForest(X_train,Y_train,X_test):
    model =RandomForestClassifier() # ランダムフォレスト
    fit = model.fit(X_train, Y_train)
    # 推論
    Y_pred = model.predict(X_test)
    return model.predict_proba(X_test)

if __name__ == "__main__":
    df = pd.read_csv("/Users/shoda/labo/learning/data/loading/binary.csv",index_col=0) # バイナリ
    X_train = df.drop('result', axis=1)
    Y_train = df["result"]
    
    #ConvertJsonToCsv.pyをsubprocessで実行することにより最新の問診票excelファイルを作成する
    command = ["/usr/local/bin/python3","/Users/shoda/labo/change/php/ConvertJsonToCsv.py","data.json","/Users/shoda/labo/change/php/data.xlsx"]
    proc = subprocess.run(command)
    
    #作成したexcelファイルの最終行をcsv化してtestデータとして扱う
    test_df = pd.read_excel("/Users/shoda/labo/change/php/data.xlsx",skiprows=1)
    # test_df = binary_data(test_df)
    test_df = make_learning_data.binary_data(test_df)
    print(test_df.columns.values)
    X_test = test_df.iloc[-1:]
    
    #ランダムフォレストで実行する
    result = RandomForest(X_train,Y_train,X_test)
    print("狭心症陽性率:",result[0][1])
    