def factorial(num):
    # your code here
    answer = 1

    if num < 2:
        return num
    else:
        while num > 0:
            answer = answer * num
            num -= 1
        
    return answer
    