import cv2
import numpy as np
MIN_MATCH_COUNT=30

detector=cv2.xfeatures2d.SIFT_create()

FLANN_INDEX_KDITREE=0
flannParam=dict(algorithm=FLANN_INDEX_KDITREE,tree=5)
flann=cv2.FlannBasedMatcher(flannParam,{})

trainImg=cv2.imread("book.jpg",cv2.COLOR_BGR2GRAY)
trainKP,trainDesc=detector.detectAndCompute(trainImg,None)


def cam():
    cam=cv2.VideoCapture(0)

    while True:
        ret, frame=cam.read()
        frameImg=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        frameKP,frameDesc=detector.detectAndCompute(frameImg,None)
        matches=flann.knnMatch(frameDesc,trainDesc,k=2)

        goodMatch=[]
        for m,n in matches:
            if m.distance < 0.75*n.distance:
                goodMatch.append(m)
        if len(goodMatch) > MIN_MATCH_COUNT:
            tp=[]
            fp=[]
            for m in goodMatch:
                tp.append(trainKP[m.trainIdx].pt)
                fp.append(frameKP[m.queryIdx].pt)
            tp,fp=np.float32((tp,fp))
            H,status=cv2.findHomography(tp,fp,cv2.RANSAC,3.0)
            h,w,c=trainImg.shape
            trainBorder=np.float32([[[0,0],[0,h-1],[w-1,h-1],[w-1,0]]])
            frameBorder=cv2.perspectiveTransform(trainBorder,H)
            cv2.polylines(frame,[np.int32(frameBorder)],True,(0,255,0),5)
            print("match book, run test!")
            return True
        else:
            print ("Not Enough match found- %d/%d" % (len(goodMatch),MIN_MATCH_COUNT))
        cv2.imshow('result',frame)
        k = cv2.waitKey(30) & 0xff
        if k == 27:
            return True
    cam.release()
    cv2.destroyAllWindows()
result = cam()
print(result)