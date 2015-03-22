module.exports = function (A, E, R) 
{
    var m = A.shape[0];
    var n = A.shape[1];
    var i,j,k,l,sum;
    if (m !== n) 
        return false; // non-square
    if (L && !U) U = L;
    
    
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            if(i>j)
            {
                R.set(i,j,0);
            }
        }
    }

    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            E.set(i,j,A.get(i,j));
        }
    }


    for(i=0;i<m;i++)
    {
        sum=sum+math.pow(E.get(i,0),2);
    }
    sum=math.sqrt(sum);
    for(j=0;j<m;j++)
    {
        E.set(j,0,(E.get(j,0)/sum));
    }



    for(i=1;i<n;i++)
    {
            for(k=i-1;k>=0;k--)
            {
                sum=0;
                for(z=0;z<m;z++)
                {
                    sum=sum+A.get(z,i)*E.get(z,k);
                }

                for(l=0;l<m;l++)
                {
                    E.set(l,i,(E.get(l,i)-sum*E.get(l,k)));
                }
            }

            sum=0;
            for(l=0;l<m;l++)
            {
                sum=sum+math.pow(E.get(l,i),2);

            }

            sum=math.sqrt(sum);

            for(k=0;k<m;k++)
            {
                 E.set(k,i,E.get(k,i)/sum);             
            }


    }



    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            if(i<=j)
            {   sum=0;
                for(l=0;l<m;l++)
                {
                    sum=sum+A.get(l,j)*E.get(l,i);
                }
                R.set(i,j,sum);
            }
        }
    }

    return true;
};
