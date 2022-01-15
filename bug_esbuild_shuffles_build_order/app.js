import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

/*

    There is difference in module evaluation between esbuild and webpack

    For this snippet

    ```
    import * as firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/analytics';

    console.log('firebase analytics is', firebase.analytics, new Error('for
    stacktrace'));
    ```

    esbuild will print 'undefined', whereas webpack bundle will print
    analytics function.

    If we move the 'firebase/app' import after other two, then both bundles
    have the function defined.

*/
console.log('firebase analytics is', firebase.analytics, new Error('for stacktrace'));
